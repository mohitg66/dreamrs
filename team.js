
const team = [
    {
      avatar: "images/prof.png",
      name: "Dr Sonal Keshwani",
      title: "Principal Investigator",
      github: "",
      linkedin: "https://www.linkedin.com/in/sonal-keshwani-5a2034322/"
    },
    {
      avatar: "images/PS1.png",
      name: "Debadatta Sethy",
      title: "PhD Scholar",
      subtitle: "Shared project with Dr. Pragma Kar",
      linkedin: "https://www.linkedin.com/in/debadatta-sethy-7312b035/"
    },
    {
      avatar: "images/PS2.png",
      name: "Rhea S Shrivastava",
      title: "PhD Scholar",
      // subtitle: "Under Dr. Sonal Keshwani",
      github: "https://github.com/RheaS18",
      linkedin: "http://www.linkedin.com/in/rhea-s-shrivastava-183344268"
    },
    {
      avatar: "images/s1.png",
      name: "Arbaaz Choudhari",
      title: "B.Tech Student",
      subtitle:"B.Tech Project",
      github: "https://github.com/Arbaaz21034",
      linkedin: "https://www.linkedin.com/in/arbaaz-choudhari-3a8346244/"
    },
    {
      avatar: "images/s2.png",
      name: "Yashila Arora",
      title: "B.Tech Student",
      subtitle:"B.Tech Project",
      github: "https://github.com/yashila21436",
      linkedin: "http://www.linkedin.com/in/yashila-arora-795936277"
    },
    {
      avatar: "images/s3.png",
      name: "Kanishk Kukreja",
      title: "B.Tech Student",
      subtitle:"B.Tech Project",
      github: "https://github.com/kanishk393",
      linkedin: "https://www.linkedin.com/in/kanishk-kukreja/"
    },
    {
      avatar: "images/s4.png",
      name: "Vishesh Sah",
      title: "B.Tech Student",
      subtitle:"B.Tech Project",
      github: "https://github.com/Vish75",
      linkedin: "https://www.linkedin.com/in/vishesh-sah-0556431ba/"
    },
    {
      avatar: "images/s5.png",
      name: "Hardik Singh",
      title: "B.Tech Student",
      subtitle:"B.Tech Project",
      github: "https://github.com/hardik21390",
      linkedin: "http://www.linkedin.com/in/hardik-singh-b48167235"
    },
    {
      avatar: "images/s6.png",
      name: "Pratham Kumar",
      title: "B.Tech Student",
      subtitle:"B.Tech Project",
      github: "https://github.com/PratK5708",
      linkedin: "https://www.linkedin.com/in/pratham-kumar/"
    },
    {
      avatar: "images/s7.png",
      name: "Vipul Raj",
      title: "B.Tech Student",
      subtitle:"B.Tech Project",
      github: "https://github.com/vipul21435",
      linkedin: "https://www.linkedin.com/in/vipul-raj-jha-491b2023a/"
    },
    {
      avatar: "images/s8.png",
      name: "Aman Sharma",
      title: "B.Tech Student",
      subtitle:"B.Tech Project",
      github: "https://github.com/aammaan",
      linkedin: "https://www.linkedin.com/in/aman-sharrma/"
  },
  {
    avatar: "images/s12.jpg",
    name: "Komal",
    title: "B.Tech Student",
    subtitle:"B.Tech Project",
    github: "https://github.com/kd-456",
    linkedin: "https://www.linkedin.com/in/komal-736601258/"
  },
  {
    avatar: "images/s13.png",
    name: "Aditi Sharma",
    title: "B.Tech Student",
    subtitle:"B.Tech Project",
    github: "https://github.com/Aditi1409sharma",
    linkedin: "https://www.linkedin.com/in/aditi-sharma-as/"
  },
  {
    avatar: "images/s9.png",
    name: "Mayank Kaim",
    title: "B.Tech Student",
    subtitle:"Independent Project",
    github: "https://github.com/Mayank20387",
    linkedin: "https://www.linkedin.com/in/mayank-kaim-472b43242"
  },
  {
    avatar: "images/s10.png",
    name: "Neev Swarnakar",
    title: "B.Tech Student",
    subtitle:"Independent Project",
    github: "https://github.com/neev13",
    linkedin: "https://in.linkedin.com/in/neev-swarnakar"
  },
  {
    avatar: "images/s11.png",
    name: "Jacqueline P Razafimiadana",
    title: "B.Tech Student",
    subtitle:"Independent Project",
    github: "https://github.com/Lilia2022",
    linkedin: "https://www.linkedin.com/in/jacqueline-pr%C3%A9cilia-razafimiadana-ab8344249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    avatar: "images/s14.jpeg",
    name: "Ayush Melty",
    title: "B.Tech Student",
    subtitle:"Independent Project",
    github: "https://github.com/AyushMelty",
    linkedin: "https://www.linkedin.com/in/ayush-melty-01831a272/"
  },
  {
    avatar: "images/s15.jpeg",
    name: "Mohit Gupta",
    title: "B.Tech Student",
    subtitle:"Independent Project",
    github: "https://github.com/mohitg66",
    linkedin: "https://www.linkedin.com/in/mohitg66/?originalSubdomain=in"
  }
];

const teamContainer = document.getElementById("team-container");

team.forEach(member => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
        <div class="hover:cursor-default">
            <div class="w-60 h-60 shadow rounded-xl">
                <img src="${member.avatar}" class="w-full h-full object-cover object-center shadow-md rounded-xl" alt="${member.name}" />
            </div>
            <div class="mt-3 text-center">
                <h4 class="text-lg text-gray-700 dark:text-gray-400 font-semibold">${member.name}</h4>
                ${member.subtitle ? `<p class="text-gray-500 mt-1">${member.subtitle}</p>` : ''}
                <p class="text-gray-500">${member.title}</p>
                <div class="mt-2 flex gap-4 text-gray-400 items-center justify-center">
                    <a href="${member.github}" aria-label="GitHub" class="${member.github ? '' : 'pointer-events-none'}">
                      <svg
                        class="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <g fill="currentColor" clip-path="url(#clip0_910_44)">
                          <path
                            fill-rule="evenodd"
                            d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z"
                            clip-rule="evenodd"
                          />
                          <path
                            d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_910_44">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href="${member.linkedin}" aria-label="LinkedIn">
                      <svg
                        class="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <g clip-path="url(#clip0_17_68)">
                          <path
                            fill="currentColor"
                            d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_68">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                </div>
            </div>
        </div>
    `;

    teamContainer.appendChild(listItem);
});