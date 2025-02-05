import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    image: "/images/john-doe.jpg",
    feedback:
      "This service is absolutely amazing! It has completely changed the way we work. Highly recommended!",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director, WebFlow",
    image: "/images/jane-smith.jpg",
    feedback:
      "I can't believe how much value this brings. The design and functionality are top-notch!",
  },
];

const TestimonialSection = () => {
  return (
    <div className="py-12 bg-gray-100 text-gray-800 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="w-full shadow-md">
            <CardHeader className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={testimonial?.image} className="w-10 h-10" />
              </Avatar>
              <div>
                <CardTitle className="text-lg font-semibold">
                  {testimonial.name}
                </CardTitle>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{testimonial.feedback}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
