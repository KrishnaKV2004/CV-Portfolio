const Home = () =>
{
    return (
        <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
            <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
                <div className="space-y-5">
                    <h1 className="text-2xl font-bold md:text-4xl">About Me</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                        I am a passionate and dedicated developer committed to building efficient and reliable solutions
                        across diverse technologies. With a strong problem-solving mindset,
                        I focus on writing clean, maintainable code while continuously learning new skills and approaches.
                        I enjoy tackling challenges that require creativity and precision, and I thrive in collaborative
                        environments where ideas and innovation come together. My goal is to contribute meaningfully to projects
                        that have a positive impact and help drive progress. Always eager to grow and connect with like-minded professionals.
                    </p>
                </div>

                <div className="space-y-10">
                    <h1 className="text-2xl font-bold md:text-4xl">Experience</h1>
                    <div className="flex flex-col lg:flex-row lg:gap-20">
                        <ul>
                            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                                <span className="text-lg font-semibold">Machine Learning Enthusiast</span>
                                <span className="font-light">Machine Learning & Deep Learning Concepts</span>
                                <span className="text-sm text-gray-400">2023-Present</span>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Actively pursuing self-directed learning in the field of Machine Learning, 
                                    exploring core concepts such as supervised and unsupervised learning, 
                                    neural networks, and computer vision. Completed multiple online courses 
                                    and hands-on projects, applying algorithms to solve real-world problems 
                                    and strengthening skills in Python, TensorFlow, Keras, and data visualization.
                                </p>
                            </li>
                            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                                <span className="text-lg font-semibold">Project Leader - OS Development</span>
                                <span className="font-light">Project-Based Learning, B.Tech CSE Department</span>
                                <span className="text-sm text-gray-400">2024-2025</span>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Led a team of peers in designing and implementing a Linux Task Manager application 
                                    using Qt as part of a project-based learning initiative. Took charge of task delegation, 
                                    coordinated development efforts, and ensured timely completion of project milestones. 
                                    Facilitated seamless collaboration and communication within the team to align on technical 
                                    goals and deliverables. Applied core operating system concepts such as process monitoring, 
                                    resource management, and user interface design to create a functional and user-friendly application.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-3xl space-y-8">
                    <h1 className="text-2xl font-bold md:text-4xl">Certifications</h1>
                    <div className="space-y-10">
                        <div className="text-baseline space-y-3">
                            <h3 className="text-sm font-semibold md:text-lg">The Complete Python Pro Bootcamp</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                                Completed the Complete Python Pro Bootcamp by Angela Yu on Udemy, gaining comprehensive
                                knowledge of Python programming from basics to advanced topics. Covered essential concepts
                                such as data structures, object-oriented programming, web scraping, automation, and API integration.
                                The course emphasized hands-on projects and practical exercises, which strengthened problem-solving
                                skills and proficiency in writing clean, efficient Python code suitable for real-world applications. 
                                These skills have provided me with a solid foundation to build scalable and efficient Python 
                                applications across various domains.
                            </p>
                        </div>
                        <div className="text-baseline space-y-3">
                            <h3 className="text-sm font-semibold md:text-lg">Machine Learning A-Z</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                                Completed the Machine Learning A-Z course by Kirill Eremenko, acquiring a solid understanding of 
                                core machine learning concepts and techniques. The course covered supervised and unsupervised learning 
                                algorithms, including regression, classification, clustering, and reinforcement learning. 
                                Emphasized practical implementation using Python, with hands-on projects that reinforced skills 
                                in data preprocessing, model building, evaluation, and optimization.
                                This course significantly enhanced my ability to apply machine learning techniques to solve practical 
                                problems with confidence.
                            </p>
                        </div>
                        <div className="text-baseline space-y-3">
                            <h3 className="text-sm font-semibold md:text-lg">Mastering Data Structure and Algorithms</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                                Completed the Mastering Data Structures and Algorithms course by Abdul Bari, gaining in-depth 
                                knowledge of fundamental data structures such as arrays, linked lists, stacks, queues, trees, 
                                and graphs. The course also covered essential algorithmic techniques including sorting, searching, 
                                recursion, and dynamic programming. Through clear explanations and practical examples. 
                                I developed strong problem-solving skills and an understanding of algorithmic efficiency.
                                This deep understanding equips me to write optimized code and tackle complex programming challenges effectively.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    <h1 className="text-2xl font-bold md:text-4xl">References</h1>
                    <div className="flex flex-wrap gap-10">
                        <div className="text-baseline space-y-1">
                            <h3 className="text-lg font-light">Software Developer</h3>
                            <h2 className="text-base font-semibold md:text-2xl">Krishna Verma</h2>
                            <p className="text-gray-600 dark:text-gray-400">Phone: +91 99976 88555</p>
                            <p className="text-gray-600 dark:text-gray-400">E-Mail: krishnaverma.0227@gmail.com</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home