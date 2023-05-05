const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/rohitbachhav21">
        <i className="fa-brands fa-github" aria-hidden="true" title="Rohit Bachhav's GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/rohit-bachhav-b34b6b229/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Rohit Bachhav's LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/bachhavrohit21/posts/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Rohit Bachhav's Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/Rohit17009782">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Rohit Bachhav's Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
