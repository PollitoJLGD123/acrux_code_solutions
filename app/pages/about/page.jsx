import { CheckCircle } from "lucide-react"

export default function About() {
    const values = [
        { title: "Innovation", description: "We embrace cutting-edge technologies and creative solutions" },
        { title: "Quality", description: "We deliver excellence in every line of code and pixel of design" },
        { title: "Reliability", description: "We build lasting relationships through dependable service" },
        { title: "Collaboration", description: "We work closely with clients to achieve their vision" },
    ]

    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Acrux Code Solutions</h2>
                    <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg">
                        We are a team of passionate web developers and designers dedicated to creating exceptional digital
                        experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Story</h3>
                        <p className="text-gray-600 mb-6">
                            Founded in 2015, Acrux Code Solutions began with a simple mission: to help businesses thrive in the
                            digital world through innovative web solutions. What started as a small team of three developers has grown
                            into a full-service web development agency with a proven track record of success.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Our team combines technical expertise with creative thinking to deliver websites and applications that not
                            only look great but also perform exceptionally well. We believe in building long-term partnerships with
                            our clients, understanding their unique needs, and delivering solutions that exceed expectations.
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded">100+ Projects Completed</div>
                            <div className="bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded">50+ Happy Clients</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                            >
                                <CheckCircle className="h-10 w-10 text-blue-600 mb-4" />
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

