const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Connect Me Via</p>
        </div>
        <div className="flex gap-9">
          <div className="social-icon">
            <a
              href="https://github.com/Manyruumpus"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src="/assets/github.svg"
                alt="GitHub"
                className="w-1/2 h-1/2"
              />
            </a>
          </div>

          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/mohit-parihar-4a6659312/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src="/assets/linkedin.svg"
                alt="GitHub"
                className="w-1/2 h-1/2"
              />
            </a>
          </div><div className="social-icon">
            <a
              href="https://www.instagram.com/mohit_____parihar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src="/assets/instagram.svg"
                alt="GitHub"
                className="w-1/2 h-1/2"
              />
            </a>
          </div>
        </div>
  
        <p className="text-white-500">© 2025 Mohit Parihar. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;