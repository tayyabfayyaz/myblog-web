function Footer() {
    return(
        <>
        {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        <p className="text-sm">
          Built by <span className="text-red-500">❤</span> Tayyab Fayyaz & IotaWeb
        </p>
      </footer>
        </>
    );
};

export default Footer;