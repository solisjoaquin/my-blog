module.exports = {
  redirects: async () => {
    return [
      {
        source: "/calendar",
        destination: "https://calendly.com/joaquinsolis/lets-talk",
        permanent: true,
      },
    ];
  },
};
