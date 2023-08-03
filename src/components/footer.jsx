import React from 'react';

const Footer = () => {
  return (
    <>
    <hr />
    <div className="bg-white text-center py-8">
      <div className="max-w-7xl mx-auto py-8 px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="footer-block">
            <h4 className=" text-sm font-bold mb-4">Jobs by Location in</h4>
            <ul className="text-gray-600 text-sm">
              <li className='py-1'><a href="">Bangalore</a></li>
              <li className='py-1'><a href="">Delhi / NCR</a></li>
              <li className='py-1'><a href="">Hyderabad</a></li>
              <li className='py-1'><a href="">Mumbai</a></li>
            </ul>
          </div>
          <div className="footer-block">
            <h4 className="text-sm font-bold mb-4">Jobs by Function</h4>
            <ul className="text-gray-600 text-sm">
              <li className='py-1'><a href="">Software Engineering Jobs</a></li>
              <li className='py-1'><a href="">Product Manager Jobs</a></li>
              <li className='py-1'><a href="">Data Scientist</a></li>
              <li className='py-1'><a href="">Internship</a></li>
            </ul>
          </div>
          <div className="footer-block">
            <h4 className="text-sm font-bold mb-4">For Employers</h4>
            <ul className="text-gray-600 text-sm">
              <li className='py-1'><a href="" target="_blank">Success Stories</a></li>
              <li className='py-1'><a href="">Post Your Jobs</a></li>
              <li className='py-1'><a href="" target="_blank">Resources</a></li>
            </ul>
          </div>
          <div className="footer-block">
            <h4 className="text-sm font-bold mb-4">RecruitersZone</h4>
            <ul className="text-gray-600 text-sm">
              <li className='py-1'><a href="/about/">About</a></li>
              <li className='py-1'><a href="/privacy/">Privacy</a></li>
              <li className='py-1'><a href="/terms/">Terms</a></li>
            </ul>
          </div>
          <div className="footer-block">
            <h4 className="text-sm font-bold mb-4">Connect</h4>
            <ul className="text-gray-600 text-sm">
              <li className='py-1'><a href="" target="_blank">Help Center</a></li>
              <li><a>Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
