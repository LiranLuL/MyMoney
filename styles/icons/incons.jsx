function Icons({ name }) {
  switch (name) {
    case "Plus":
      return (
        <svg width="24" height="27" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 9H9V16H7V9H0V7H7V0H9V7H16V9Z" fill="#1F1F1F" />
        </svg>
      );
    case "Product":
      return (
        <svg width="24" height="27" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 9H9V16H7V9H0V7H7V0H9V7H16V9Z" fill="#1F1F1F" />
        </svg>
      );
  }
}

export default Icons;
