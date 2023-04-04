const formateDate = (date) => {
    const array = date.split("T");
    const dateArray = array[0].split("-");
    const day = dateArray[2];
    const month = dateArray[1];
    const year = dateArray[0];
    return `${day} / ${month} / ${year}`;
  };

export default formateDate;