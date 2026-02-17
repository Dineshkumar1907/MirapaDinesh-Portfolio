import React from 'react'
import { useState } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';

  function HomePage() {
  // 1. ADD THIS STATE
  const [formData, setFormData] = useState({ name: '', email: '', subject: '' });

  // 2. ADD THIS FUNCTION
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (<>
    <div className="">


      <Header></Header>

      <section id="home">
        <div className="min-h-screen  flex items-center justify-center space-x-30 max-md:space-x-15  max-sm:flex-col bg-white">
          <div className="space-y-2.5 max-md:space-y-1 max-sm: -ml-10 max-sm:mb-10">
            <p className="poppins text-5xl text-[#3e3e3e] max-md:text-2xl max-sm:text-3xl">Hi</p>
            <p className="poppins text-5xl text-[#3e3e3e] max-md:text-2xl max-sm:text-3xl">I&apos;m <span className="text-[#2E71FE]">Dinesh</span></p>
            <p className="poppins text-5xl text-[#3e3e3e] max-md:text-2xl max-sm:text-3xl">Jr.Frontend</p>
            <p className="poppins text-5xl text-[#3e3e3e] max-md:text-2xl max-sm:text-3xl">Web Developer</p>
            <div className="flex gap-4 pt-6 max-sm:gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" className="max-sm:h-5">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              <a href="https://www.linkedin.com/in/dinesh-kumar-mirapa-593b50389/"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" className="hover:text-[#2E71FE] max-sm:h-5">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg></a>
            </div>
          </div>

          <div>
            <img className="h-80 rounded-tr-[100px] rounded-bl-[100px] max-md:h-50 max-sm:h-60 max-sm:rounded-xl max-sm:" src="./Images/dp.jpg" alt="" />
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20">
        <div>
          <h1 className="text-center playfair font-bold text-5xl text-black underline decoration-[#2E71FE] max-sm:text-3xl max-sm:pb-20">About</h1>
          <div className="min-h-screen  flex items-center justify-center space-x-20 max-md:space-x-15 max-sm:flex-col " >
            <div>
              <img className="h-100 rounded-xl  max-md:h-50 max-sm:h-80 max-sm:rounded-xl max-sm:ml-15 -mt-70" src="./Images/pfp.jpg" alt="" />
            </div>
            <div className="w-90 space-y-2 -mt-40 max-sm:mt-0.5">
              <h1 className="text-3xl poppins1 max-sm:text-center max-sm:text-xl max-sm:pt-3.5">I’m Dinesh Kumar</h1>

              <p className="oswald max-sm:text-center max-sm:text-sm text-lg"> A front-end developer focused on building clean, responsive user interfaces with HTML, CSS, JavaScript, React.js, and Tailwind CSS. I’ve worked on real projects like a blockchain-based electronic health records app and a responsive e-commerce furniture website, creating reusable components and integrating with backend services.</p>

              {/* <p className="oswald max-sm:text-center max-sm:text-sm text-xl">I’m looking for a Junior Frontend Developer role where I can turn designs into polished, user-friendly web experiences and grow while contributing to production-quality UI.</p> */}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-20 max-sm:-mt-40 -my-30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="inline-block text-5xl font-bold text-black underline decoration-[#2E71FE] pb-1 playfair max-sm:text-3xl">
              Skills
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            <div className="flex-1 w-full space-y-6">
              <h3 className="text-3xl  text-black poppins max-sm:text-xl max-sm:text-center max-sm:-mt-5">Professional Skills</h3>
              <p className="text-black text-lg leading-relaxed oswald max-sm:text-sm max-sm:text-center">
                Im a passionate front-end developer with a strong foundation in HTML5, CSS3, Javascript react.js and tailwind Css. I thrive on translating design concepts into responsive, user-friendly web interfaces, and I’ve demonstrated this through projects like login-page prototypes and mini projects and freelance projects . With attention to clean semantic markup, modern styling, and interactive scripting, I continuously refine my front-end craft and am ready to bring polished, functional web experiences to your team.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  {
                    name: "HTML5",
                    percentage: "95%",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48">
                        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5z"></path>
                        <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                        <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                        <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                      </svg>
                    )
                  },
                  {
                    name: "CSS3",
                    percentage: "85%",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                      </svg>
                    )

                  },
                  {
                    name: "JAVASCRIPT",
                    percentage: "80%",
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                      <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                    </svg>)
                  },
                  {
                    name: " React.Js",
                    percentage: "80%",
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" viewBox="0 0 32 32" fill="none">
                      <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE" />
                    </svg>)
                  },
                  {
                    name: "Tailwind css",
                    percentage: "80%",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" viewBox="0 0 32 32">
                        <title>file_type_tailwind</title>
                        <path
                          d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                          fill="#44a8b3" // Changed from style="fill:..." to just fill="..."
                        />
                      </svg>
                    )
                  }


                ].map((skill) => (
                  <div key={skill.name} className="relative bg-white shadow-lg rounded-xl p-2 flex items-center justify-between border border-gray-100 overflow-hidden">
                    <div className="flex items-center gap-2 z-10">
                      {/* Custom SVG Icon Container */}
                      <div className="flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className="font-bold text-gray-700 poppins">{skill.name}</span>
                    </div>
                    <span className="font-bold text-gray-800 z-10">{skill.percentage}</span>

                    {/* Blue Progress Indicator */}
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-[#2E71FE] transition-all duration-1000"
                      style={{ width: skill.percentage }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full">
              <img
                src="./Images/web dev.jpg"
                alt="Professional working"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl mt-30 max-sm:-mt-1 max-sm:h-60 max-sm:w-80 max-sm:ml-3"
              />
            </div>
          </div>
        </div>
      </section>

    <Contact></Contact>
    </div>
    <Footer></Footer>
  </>)
}

export default HomePage
