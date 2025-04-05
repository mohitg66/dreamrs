document.addEventListener('DOMContentLoaded', function() {
    // Header and Footer
    // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    const headerHTML = `
    <header id="main-header" class="fixed w-full bg-transparent top-0 z-20 px-6 transition-colors duration-300">
        <div class="container mx-auto py-2 md:py-3 flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center space-x-2">
                <a href="index.html">
                    <img src="images/nnlogo.png" alt="DREAMRS Lab Logo" class="h-14">
                </a>
            </div>
            <!-- Navbar -->
            <nav class="hidden md:flex gap-x-6 relative text-lg drop-shadow-[0_0px_12px_rgba(255,255,255,0.4)]">
                <a href="index.html" class="text-gray-700 dark:text-gray-200 hover:text-fuchsia-600">Home</a>
                <a href="research.html" class="text-gray-700 dark:text-gray-200 hover:text-fuchsia-600">Research</a>
                <a href="teaching.html" class="text-gray-700 dark:text-gray-200 hover:text-fuchsia-600">Teaching</a>
                <a href="team.html" class="text-gray-700 dark:text-gray-200 hover:text-fuchsia-600">Team</a>
                <a href="pi.html" class="text-gray-700 dark:text-gray-200 hover:text-fuchsia-600">Principal Investigator</a>
                <!-- Dropdown for People -->
                <!-- <div class="group inline-block relative">
                    <a href="#" class="text-gray-700 dark:text-gray-200 hover:text-fuchsia-600">People</a>
                    <div id="People-Group" class="absolute hidden group-hover:block pt-4 pb-2 shadow-sm rounded-b w-max z-10 bg-transparent">
                        <a href="pi.html" class="block pl-4 pr-8 py-2 text-gray-700 dark:text-gray-200 hover:text-fuchsia-600">Principal Investigator</a>
                        <a href="team.html" class="block pl-4 pr-8 py-2 text-gray-700 dark:text-gray-200 hover:text-fuchsia-600">Team</a>
                    </div>
                </div>  -->
            </nav>
            <!-- Mobile Menu Button -->
            <div class="md:hidden">
                <button id="mobile-menu-button" class="text-gray-700 dark:text-gray-200 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden absolute top-full right-0 bg-gray-50 dark:bg-gray-800 bg-opacity-80 shadow-lg">
            <nav class="p-2 space-y-1 sm:px-3">
                <a href="research.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-600">Research</a>
                <a href="teaching.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-600">Teaching</a>
                <a href="team.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-600">Team</a>
                <a href="pi.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-600">Principal Investigator</a>
            </nav>
        </div>
    </header>
    `;
    
    const footerHTML = `
    <footer class="bg-gray-900 dark:border-t dark:border-gray-700 text-white py-8">
        <div class="divide-y-2 px-6">
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <!-- Logos: IIIT Delhi and DREAMRS Lab -->
                <div class="flex flex-col items-center md:items-start space-y-6">
                    <!-- IIIT Delhi Logo -->
                    <img src="images/iiitdlogo2.png" alt="IIIT Delhi Logo" class="w-72 rounded-sm">
                    <!-- DREAMRS Lab Logo (Smaller) -->
                    <img src="images/nnlogo2.png" alt="DREAMRS Lab Logo" class="w-72 rounded-sm">
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul class="space-y-1">
                        <li><a href="index.html" class="text-sm text-gray-400 hover:text-fuchsia-500 transition-colors duration-300">Home</a></li>
                        <li><a href="research.html" class="text-sm text-gray-400 hover:text-fuchsia-500 transition-colors duration-300">Research</a></li>
                        <li><a href="teaching.html" class="text-sm text-gray-400 hover:text-fuchsia-500 transition-colors duration-300">Teaching</a></li>
                        <li><a href="pi.html" class="text-sm text-gray-400 hover:text-fuchsia-500 transition-colors duration-300">Principal Investigator</a></li>
                        <li><a href="team.html" class="text-sm text-gray-400 hover:text-fuchsia-500 transition-colors duration-300">Team</a></li>
                    </ul>
                </div>

                <!-- Contact Us -->
                <div>
                    <h3 class="text-lg font-semibold mb-2">Contact Us</h3>
                    <ul class="space-y-2">
                        <li class="text-sm text-gray-400">A-405, R&D Building, IIIT-Delhi R&D Building, Okhla Industrial Estate, New Delhi, India</li>
                        <li class="text-sm text-gray-400">sonal.keshwani@iiitd.ac.in</li>
                        <li class="text-sm text-gray-400">dreamrslab@iiitd.ac.in</li>
                    </ul>
                </div>

                <!-- Follow Us -->
                <div>
                    <h3 class="text-lg font-semibold mb-2">Follow Us</h3>
                    <div class="flex space-x-4">
                        <!-- Google Scholar -->
                        <a href="https://scholar.google.co.in/citations?user=NLPFhkMAAAAJ&hl=en" class="text-gray-400 hover:text-fuchsia-500 transition-colors duration-300">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M21.35 11.1h-9.4v2.83h5.44c-.45 2.21-2.32 3.81-4.68 3.81a5.15 5.15 0 010-10.3c1.45 0 2.8.6 3.76 1.56l2.05-2.05A8.2 8.2 0 0012 3.92a8.08 8.08 0 00-8.14 8.08A8.08 8.08 0 0012 20.08c4.14 0 7.5-3.34 7.5-7.5 0-.5-.05-1-.15-1.48z"></path>
                            </svg>
                        </a>
                        <!-- LinkedIn -->
                        <a href="https://www.linkedin.com/in/sonal-keshwani-5a2034322/" class="text-gray-400 hover:text-fuchsia-500 transition-colors duration-300">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Copyright -->
            <div class="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
                &copy; 2025 DREAMRS Lab. All rights reserved.
            </div>
        </div>
    </footer>
    `;

    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Change header background on scroll
    const header = document.querySelector('header');
    const heroSection = document.getElementById('Hero');
    // const peopleGroup = document.getElementById('People-Group');

    if (heroSection) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > heroSection.offsetHeight - header.offsetHeight) {
                header.classList.remove('bg-transparent', 'shadow');
                header.classList.add('bg-gray-50', 'dark:bg-gray-800', 'shadow');
                mobileMenu.classList.remove('bg-opacity-80');
                // mobileMenu.classList.add('bg-gray-50', 'dark:bg-gray-800');
                // peopleGroup.classList.remove('bg-transparent');
                // peopleGroup.classList.add('bg-gray-50', 'dark:bg-gray-800');
            } else {
                header.classList.remove('bg-gray-50', 'dark:bg-gray-800', 'shadow');
                header.classList.add('bg-transparent');
                // mobileMenu.classList.remove('bg-gray-50', 'dark:bg-gray-800');
                mobileMenu.classList.add('bg-opacity-80');
                // peopleGroup.classList.remove('bg-gray-50', 'dark:bg-gray-800');
                // peopleGroup.classList.add('bg-transparent');
            }
        });
    } else {
        header.classList.remove('bg-transparent', 'shadow');
        header.classList.add('bg-gray-50', 'dark:bg-gray-800', 'shadow');
        mobileMenu.classList.remove('bg-opacity-80');
        // mobileMenu.classList.add('bg-gray-50', 'dark:bg-gray-800');  
        // peopleGroup.classList.remove('bg-transparent');
        // peopleGroup.classList.add('bg-gray-50', 'dark:bg-gray-800');
    }
    

    // Publications
    // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    const publicationsData = [
        {
            "Title": "Developing a method for creating structured representations of working of systems from natural language descriptions using the SAPPhIRE model of causality",
            "Author": "K Bhattacharya, A Majumder, AN Bhatt, <strong>S Keshwani</strong>, BSC Ranjan, ...",
            "Journal": "AI EDAM 38, e24",
            "Cited_by": "",
            "Year": 2024,
            "Link": "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=NLPFhkMAAAAJ&citation_for_view=NLPFhkMAAAAJ:UebtZRa9Y70C"
        },
        {
            "Title": "Comparing Analogy-Based Methods—Bio-Inspiration and Engineering-Domain Inspiration for Domain Selection and Novelty",
            "Author": "<strong>S Keshwani</strong>, H Casakin",
            "Journal": "Biomimetics 9 (6), 344",
            "Cited_by": 2,
            "Year": 2024,
            "Link": "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=NLPFhkMAAAAJ&citation_for_view=NLPFhkMAAAAJ:UebtZRa9Y70C"
        },
        {
            "Title": "Influence of analogical domains and comprehensiveness in explanation of analogy on the novelty of designs",
            "Author": "<strong>S Keshwani</strong>, A Chakrabarti",
            "Journal": "Research in Engineering Design 28 (3), 381-412",
            "Cited_by": 18,
            "Year": 2017,
            "Link": "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=NLPFhkMAAAAJ&citation_for_view=NLPFhkMAAAAJ:IjCSPb-OGe4C"
        },
        {
            "Title": "Comparing novelty of designs from biological-inspiration with those from brainstorming",
            "Author": "<strong>S Keshwani</strong>, TA Lenau, S Ahmed-Kristensen, A Chakrabarti",
            "Journal": "Journal of Engineering Design 28 (10-12), 654-680",
            "Cited_by": 54,
            "Year": 2017,
            "Link": "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=NLPFhkMAAAAJ&citation_for_view=NLPFhkMAAAAJ:u5HHmVD_uO8C"
        },
    ]
    const publications = document.getElementById('publications');

    if (publications){   
        publicationsData.forEach(item => {
            const li = document.createElement('div');
            // add class to li

            li.innerHTML = `
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">${item.Year}</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"><a class="hover:underline" rel="noopener" target="_blank" href="${item.Link}">${item.Title}</a></h3>
                <p class="text-base font-normal text-gray-700 dark:text-gray-200">${item.Journal}</p>
                <p class="text-base font-normal text-gray-600 dark:text-gray-400">${item.Author}</p>
            `;

            publications.appendChild(li);
        });
    }

    
    // Research Collaborations
    // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    const collaborationsData = [
        {
            "name": "Prof. Gaetano Cascini",
            "link": "https://mecc.polimi.it/en/research/faculty/prof-gaetano-cascini",
            "position": "Full Professor",
            "department": "Department of Mechanical Engineering, Politecnico di Milano, Milan, <strong>Italy</strong>",
            "departmentLink": "https://www.mecc.polimi.it/en/"
        },
        {
            "name": "Prof. Hernan Casakin",
            "link": "https://scholar.google.co.il/citations?user=kr7wm4QAAAAJ&hl=iw",
            "position": "Associate Professor",
            "department": "Department of Architecture, Ariel University, <strong>Israel</strong>",
            "departmentLink": "https://cris.ariel.ac.il/en/organisations/school-of-architecture-2"
        },
        {
            "name": "Prof. Santosh Jagtap",
            "link": "https://sites.google.com/view/santoshdesign/home",
            "position": "Associate Professor",
            "department": "Department of Design, <strong>IIT Guwahati</strong>, India",
            "departmentLink": "https://www.iitg.ac.in/design/"
        },
        {
            "name": "Prof. Amaresh Chakrabarti",
            "link": "https://dm.iisc.ac.in/cpdm/facultyprofile.php?name=1",
            "position": "Professor and Chair",
            "department": "Centre for Product Design and Manufacturing, <strong>IISc Bangalore</strong>",
            "departmentLink": "https://dm.iisc.ac.in/dm/"
        },
        {
            "name": "Prof. E.Z. Opiyo",
            "link": "https://scholar.google.com/citations?user=3SAp_hIAAAAJ&hl=en",
            "position": "Professor",
            "department": "St. Joseph University, Dar-es-salaam, <strong>Tanzania</strong>",
            "departmentLink": "https://www.sjuit.ac.tz/"
        },
        {
            "name": "Prof. Srinivasan Venkataraman",
            "link": "https://sites.google.com/view/srinivasan-aboutme/home",
            "position": "Assistant Professor",
            "department": "Department of Design, <strong>IIT Delhi</strong>, India",
            "departmentLink": "https://www.iitg.ac.in/design/"
        },
        {
            "name": "Prof. Torben Anker Lenau",
            "link": "https://orbit.dtu.dk/en/persons/torben-anker-lenau",
            "position": "Associate Professor",
            "department": "Technical University of Denmark, <strong>Denmark</strong>",
            "departmentLink": "https://www.dtu.dk/english"
        },
        {
            "name": "Prof. Saeema Ahmed-Kristensen",
            "link": "https://experts.exeter.ac.uk/34981-saeema-ahmedkristensen",
            "position": "Professor",
            "department": "Design Engineering and Innovation, University of Exeter, <strong>England</strong>",
            "departmentLink": "https://www.exeter.ac.uk/"
        }
    ];
    
    const collaborations = document.getElementById('research-collaborations');

    if (collaborations){
        collaborationsData.forEach(collab => {
            const li = document.createElement('li');

            li.innerHTML = `
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white"><a class="hover:underline" rel="noopener" target="_blank" href="${collab.link}">${collab.name}</a></h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">${collab.position}, <a rel="noopener" target="_blank" href="${collab.departmentLink}">${collab.department}</a></p>
            `;

            collaborations.appendChild(li);
        });
    }

    // Courses
    // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
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

    if (courses){
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
    }

    // Team
    // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Refer to the team.js file for the team data
});