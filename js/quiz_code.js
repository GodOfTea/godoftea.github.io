window.onload = function()
{
    let result = {};
    let step = 0;

    function showQuestion(questionNumber)
    {
        document.querySelector(".question").innerHTML = quiz[step]["q"];
        let answer = "";
        for (let key in quiz[step]["a"])
        {
            answer += `<li data-v="${key}" class="answer-varinat">${quiz[step]["a"][key]}</li>`;
        }
        document.querySelector(".answer").innerHTML = answer;
    }

    function showResult()
    {
        let key = Object.keys(result).reduce(function(a,b)
        {
            return result[a] > result[b] ? a : b;
        });
        console.log(key);

        document.querySelector(".result").innerHTML = answers[key]["description"];
        let imgSrc = "img/" + key + ".jpg"
        document.images["img"].src = imgSrc
        console.log(imgSrc);
    }

    document.onclick = function(event)
    {
        event.stopPropagation();
        if (event.target.classList.contains("answer-varinat") && step < quiz.length)
        {
            if (result[event.target.dataset.v] != undefined)
            {
                result[event.target.dataset.v]++;
            }
            else
            {
                result[event.target.dataset.v] = 1;
            }
            step++;
            if (step == quiz.length)
            {
                document.querySelector(".question").remove();
                document.querySelector(".answer").remove();
                showResult();
            }
            else
            {
                showQuestion(step);
            }
            console.log(result);
        }
    }

    showQuestion(step);
}