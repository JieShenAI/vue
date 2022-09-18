let arr = [
    {
        id: "1",
        v: "10",
    },
    {
        id: "2",
        v: "20",
    }
];

const getContainerName = (obj) => {
    let name = ""
    Object.keys(obj).forEach(
        (tagName) => {
            if (tagName != "id") {
                name = tagName;
                return
            }
        }
    )
    return name;
}
