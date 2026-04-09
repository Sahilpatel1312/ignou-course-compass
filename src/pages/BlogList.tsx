import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BlogList = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="IGNOU Blog – Latest News, Admission Updates & Career Guidance 2026"
        description="Read the latest IGNOU blog posts about admission 2026, course guides, degree validity, UGC guidelines, and career tips for distance education students."
        keywords="IGNOU blog, IGNOU news 2026, IGNOU admission updates, IGNOU degree value, IGNOU career guidance, distance education blog"
        canonical="/blog"
      />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">IGNOU Blog & Latest Updates</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Stay updated with the latest IGNOU admission news, course guides, career tips, and expert insights for 2026.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 hover:border-l-yellow-500">
                  <CardHeader className="pb-3">
                    <Badge variant="outline" className="w-fit bg-blue-50 text-blue-700 border-blue-200 text-xs">
                      {post.category}
                    </Badge>
                    <h2 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors leading-tight mt-2">
                      {post.title}
                    </h2>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                      </div>
                      <span className="text-blue-600 font-semibold flex items-center gap-1">Read More <ArrowRight className="h-3 w-3" /></span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogList;
