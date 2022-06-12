// fetch를 이용한 데이터 조회(ajax)
var getJsonList = (callback) => {
    fetch("./data/list.json", {
        method: "get",
    })
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        });
};

export default getJsonList;
