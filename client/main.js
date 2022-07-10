const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const submitBtn = document.getElementById("submit")
const deleteBtn = document.getElementById("delete")
const updateBtn = document.getElementById("update")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
}

const submitFunc = () => {
    axios.get("http://localhost:4000/api/submitFunc")
    .then(res => {
        const data = res.data;
        alert(data);
})
}

const deleteFortune = () => {
    axios.delete("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
})
}

const updateFortune = (string, index) => {
    axios.put(`http://localhost:4000/api/fortune/${string}`, {index})
    .then(fortune).catch(err)
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
submitBtn.addEventListener('click', submitFunc)
deleteBtn.addEventListener('click', deleteFortune)
updateBtn.addEventListener('click', updateFortune)