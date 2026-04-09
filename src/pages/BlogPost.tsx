import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import CounselingForm from "@/components/CounselingForm";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isCounselingOpen, setIsCounselingOpen] = useState(false);
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let i = 0;
    let tableRows: string[][] = [];
    let inTable = false;

    const processInline = (text: string) => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded text-sm">$1</code>');
    };

    while (i < lines.length) {
      const line = lines[i].trim();

      if (!line) { i++; continue; }

      // Table
      if (line.startsWith('|') && line.endsWith('|')) {
        if (!inTable) { inTable = true; tableRows = []; }
        const cells = line.split('|').filter(c => c.trim()).map(c => c.trim());
        if (!cells.every(c => /^[-:]+$/.test(c))) {
          tableRows.push(cells);
        }
        i++;
        // Check if next line is not a table
        if (i >= lines.length || !lines[i].trim().startsWith('|')) {
          inTable = false;
          const [header, ...body] = tableRows;
          elements.push(
            <div key={`table-${i}`} className="overflow-x-auto my-4">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead><tr className="bg-blue-50">{header.map((h, j) => <th key={j} className="border border-gray-200 px-3 py-2 text-left font-semibold" dangerouslySetInnerHTML={{ __html: processInline(h) }} />)}</tr></thead>
                <tbody>{body.map((row, ri) => <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>{row.map((cell, ci) => <td key={ci} className="border border-gray-200 px-3 py-2" dangerouslySetInnerHTML={{ __html: processInline(cell) }} />)}</tr>)}</tbody>
              </table>
            </div>
          );
          tableRows = [];
        }
        continue;
      }

      // Headings
      if (line.startsWith('#### ')) {
        elements.push(<h4 key={i} className="text-lg font-semibold text-gray-800 mt-6 mb-2" dangerouslySetInnerHTML={{ __html: processInline(line.slice(5)) }} />);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={i} className="text-xl font-bold text-gray-800 mt-8 mb-3" dangerouslySetInnerHTML={{ __html: processInline(line.slice(4)) }} />);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={i} className="text-2xl font-bold text-gray-800 mt-8 mb-4" dangerouslySetInnerHTML={{ __html: processInline(line.slice(3)) }} />);
      } else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={i} className="border-l-4 border-blue-500 bg-blue-50 p-4 my-4 rounded-r-lg">
            <p className="text-blue-800 font-medium" dangerouslySetInnerHTML={{ __html: processInline(line.slice(2)) }} />
          </blockquote>
        );
      } else if (line.match(/^\d+\.\s/)) {
        elements.push(<li key={i} className="ml-6 list-decimal text-gray-700 mb-1" dangerouslySetInnerHTML={{ __html: processInline(line.replace(/^\d+\.\s/, '')) }} />);
      } else if (line.startsWith('- ')) {
        elements.push(<li key={i} className="ml-6 list-disc text-gray-700 mb-1" dangerouslySetInnerHTML={{ __html: processInline(line.slice(2)) }} />);
      } else {
        elements.push(<p key={i} className="text-gray-700 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: processInline(line) }} />);
      }
      i++;
    }
    return elements;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={`${post.title} | IGNOU Distance Blog`}
        description={post.excerpt}
        keywords={`IGNOU, ${post.category}, distance education, online courses 2026`}
        canonical={`/blog/${post.slug}`}
      />
      <Header />

      <article className="py-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:underline text-sm mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
          </Link>

          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs mb-3">
            {post.category}
          </Badge>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 border-b pb-4">
            <span className="flex items-center gap-1"><User className="h-4 w-4" />{post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span>
          </div>

          <div className="prose max-w-none">
            {renderContent(post.content)}
          </div>

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-center text-white">
            <h3 className="text-xl font-bold mb-2">Need Help with IGNOU Admission?</h3>
            <p className="text-blue-100 mb-4">Get free expert counselling for IGNOU July 2026 session</p>
            <Button
              onClick={() => setIsCounselingOpen(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6"
            >
              Get Free Counselling
            </Button>
          </div>
        </div>
      </article>

      <Footer />
      <CounselingForm
        isOpen={isCounselingOpen}
        onClose={() => setIsCounselingOpen(false)}
        preSelectedCourse=""
      />
    </div>
  );
};

export default BlogPost;
