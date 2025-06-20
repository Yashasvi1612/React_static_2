import './index.css';

export default function Main_body() {
  return (
    <div className="container">
     {/* Right-aligned background image */}
      
      <div className="content">
        

        <h1 className="Facts">Fun Facts about React</h1>
          <div className="bg-image"></div>
        <ul className="lists">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </div>
  );
}
