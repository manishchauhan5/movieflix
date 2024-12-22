export const About = () => {
    return (
      <div className="md:px-36 px-12 md:py-16 py-7 h-screen  mx-auto p-6 bg-slate-100">
        <h1 className="text-3xl font-bold text-center mb-5">About This Project</h1>
        <p className="text-lg mb-4">
          Welcome to the Movie Explorer project, your ultimate destination for discovering the latest in the movie industry. 
          This application provides detailed information about top-rated movies, trending shows, and must-watch content.
          Built with React, Tailwind CSS, and React Router, this project demonstrates modern web development techniques 
          and seamless navigation.
        </p>
        <p className="text-lg mb-4">
          The Movie Explorer leverages the MovieFlix API, offering a vast collection of movies and dramas. Users can explore 
          a wide variety of genres and discover new favorites with ease. From blockbusters to indie films, MovieFlix provides 
          comprehensive data to enhance your viewing experience.
        </p>
  
        <h2 className="text-2xl font-semibold mb-3">Connect with Me</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a 
              href="https://www.instagram.com/manish_j4u/profilecard/?igsh=NGo4ZzFmcjY2ZHg2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline">
              Instagram
            </a>
          </li>
          <li>
            <a 
              href="https://manish-portfolio5.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline">
              Portfolio
            </a>
          </li>
          <li>
            <a 
              href="mailto:mkchauhan300@gmail.com" 
              className="text-blue-500 hover:underline">
              Email: mkchauhan300@gmail.com
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/manishchauhan5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    );
  };
  