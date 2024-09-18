export const simpleConsult = (message, handleClick, setMessage) => {
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
            handleClick((prev) => [...prev, { text: data, class: "bot" }]);
            setMessage("");
        });
}