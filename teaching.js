document.addEventListener('DOMContentLoaded', function() {
    const courses = [
    {
        code: "DES102",
        title: "Introduction to Human Computer Interaction",
        description: "This course will provide a theoretical and practical understanding of human-computer interaction (HCI) design including concepts of user centered and design thinking, usability, interfaces, rapid prototyping, and evaluation. This is a project-based course where students can work on different user-centric prototypes.",
        link: "https://techtree.iiitd.edu.in/viewDescription/filename?=DES102"
    },
    {
        code: "DES523",
        title: "Cognition & Information Processing in Design",
        description: "In this course students will understand human cognition and its relevance in design. Through the course, the basic cognitive processes such as perception, attention, learning and memory will be discussed as separate entities. Students will also look at the role of various factors such as colour, form , shape and stress on cognition. Students will develop the skill to identify the application of these concepts to design. Students will be able to evaluate the subjective and objective methods of mental workload measures This course will enlighten students on all aspects of human cognition and design.",
        link: "https://techtree.iiitd.edu.in/viewDescription/filename?=DES523"
    },
    {
        code: "DES524",
        title: "Ergonomics / Human Factors for Design",
        description: "In designing, ergonomics takes care of the users' need, their limitations and abilities. Various aspects of basic anthropometry, physical, physiological, psychological and biomechanical limitations and abilities of the human body with reference to human centred design of products and systems will be explained. Students will: a) learn the principles, overview and background of ergonomics; b) develop the skill to identify the user friendly man machine environment system; and c) understand the methods and processes to evaluate the products, facilities, environment, jobs and tasks. This course will help in finding real time solutions to improve the quality of life and performance of an individual. ",
        link: "https://techtree.iiitd.edu.in/viewDescription/filename?=DES524"
    },
    {
        code: "DES533",
        title: "Interaction Design Perspectives & Methods",
        description: "This course provides description of various design methods at the various stages of designing. Students will learn to conduct in depth user analysis, understand the nuances of questionnaire design and analyze the user data quantitatively and qualitatively. Students will also be able to create prototypes and conduct usability testing of the developed prototypes.",
        link: "https://techtree.iiitd.edu.in/viewDescription/filename?=DES533"
    }
    ];

    const courseCardsContainer = document.getElementById('course-cards');

    courses.forEach(course => {
    const courseCard = document.createElement('a');
    courseCard.href = course.link;
    courseCard.target = "_blank";
    courseCard.rel = "noopener";
    courseCard.className = "course-card group flex-1 flex justify-center items-center md:h-96 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300";

    courseCard.innerHTML = `
        <div class="p-6 h-full content-center">
            <h3 class="course-title text-xl sm:text-2xl text-center font-semibold text-gray-800 dark:text-gray-50 group-hover:hidden">${course.code}</h3>   
            <p class="course-subtitle mt-2 text-lg sm:text-xl text-center text-gray-600 dark:text-gray-400 group-hover:hidden">${course.title}</p>
            <p class="course-description h-full content-center text-[0.75vw] text-gray-500 dark:text-gray-300 hidden group-hover:block group-hover:text-center overflow-scroll pr-1">
                ${course.description}
            </p>
        </div>
    `;

    courseCardsContainer.appendChild(courseCard);
    });
});