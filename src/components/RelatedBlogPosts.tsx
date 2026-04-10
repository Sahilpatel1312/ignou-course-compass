import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { blogPosts, BlogPost } from "@/data/blogPosts";

interface RelatedBlogPostsProps {
  courseKeywords: string[];
  maxPosts?: number;
}

const RelatedBlogPosts = ({ courseKeywords, maxPosts = 3 }: RelatedBlogPostsProps) => {
  const navigate = useNavigate();

  const relatedPosts = blogPosts.filter(post => {
    const searchText = (post.title + post.excerpt + post.content + post.category).toLowerCase();
    return courseKeywords.some(keyword => searchText.includes(keyword.toLowerCase()));
  }).slice(0, maxPosts);

  // If not enough related posts, fill with general posts
  const posts = relatedPosts.length >= 2 ? relatedPosts : blogPosts.slice(0, maxPosts);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          Latest Articles & Guides
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Stay informed with the latest updates on IGNOU admissions, courses, and career guidance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 group border-t-4 border-t-blue-500"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <CardContent className="p-5">
                <Badge variant="outline" className="mb-3 bg-blue-50 text-blue-700 border-blue-200 text-xs">
                  {post.category}
                </Badge>
                <h3 className="font-semibold text-sm mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                  <span className="text-blue-600 flex items-center gap-1 group-hover:underline">
                    Read <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/blog')}
            className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-2 mx-auto"
          >
            View All Articles <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogPosts;
