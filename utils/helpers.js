module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },

    format_date: (date) => {

      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${ new Date(date).getFullYear()}`;
    },


    // attempt to check if author = signed in user
    isAuthor: (myId, authorId) => {
      return myId === authorId;
    }
    
  };
  