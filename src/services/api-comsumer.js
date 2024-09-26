export const simpleConsult = (message, handleClick, videoNumber, setMessage) => {
    setMessage("");
    if (videoNumber === null){
    return fetch(
        "https://fastapi-infosaludemergente-production.up.railway.app/process_single",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            param: message,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            handleClick((prev) => [...prev, { text: data?.result, class: "bot" }]);
            
        });
      }
      else {
          return fetch(
            "https://fastapi-infosaludemergente-production.up.railway.app/process_double",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                param2: message,
                param1: videoNumber
              }),
            }
          )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                handleClick((prev) => [...prev, { text: data?.result, class: "bot" }]);
                
            });
      }
}