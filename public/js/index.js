let tabQuestions = ["2 + 3 = ", "5 + 7 = ", "10 + 32 = "];
let tabReponses = ["5", "12", "42"];
let tabQuestRepo = [];

let reponse = parseInt(prompt(`${tabQuestions[0]} ?`));
if(reponse != tabReponses[0]) {
    reponse = parseInt(prompt(`${tabQuestions[0]} ?`));
    if(reponse != tabReponses[0]) {
        reponse = parseInt(prompt(`${tabQuestions[0]} ?`));
        if(reponse != tabReponses[0]) {
            alert(`T'as raté 3x, la reponse est ${tabReponses[0]}`);
        } else {
            alert("Reponse correcte");
            tabQuestRepo.push(`${tabQuestions[0]} ${reponse}`);
        }
    } else {
        alert("Reponse correcte");
        tabQuestRepo.push(`${tabQuestions[0]} ${reponse}`);
    };
} else {
    alert("Reponse correcte");
    tabQuestRepo.push(`${tabQuestions[0]} ${reponse}`);
};
console.log(tabQuestRepo);

reponse = parseInt(prompt(`${tabQuestions[1]} ?`));

if(reponse != tabReponses[1]) {
    reponse = parseInt(prompt(`${tabQuestions[1]} ?`));
    if(reponse != tabReponses[1]) {
        reponse = parseInt(prompt(`${tabQuestions[1]} ?`));
        if(reponse != tabReponses[1]) {
            alert(`T'as raté 3x, la reponse est ${tabReponses[1]}`);
        } else {
            alert("Reponse correcte");
            tabQuestRepo.push(`${tabQuestions[1]} ${reponse}`);
        }
    } else {
        alert("Reponse correcte");
        tabQuestRepo.push(`${tabQuestions[1]} ${reponse}`);
    };
} else {
    alert("Reponse correcte");
    tabQuestRepo.push(`${tabQuestions[1]} ${reponse}`);
};
console.log(tabQuestRepo);

reponse = parseInt(prompt(`${tabQuestions[2]} ?`));

if(reponse != tabReponses[2]) {
    reponse = parseInt(prompt(`${tabQuestions[2]} ?`));
    if(reponse != tabReponses[2]) {
        reponse = parseInt(prompt(`${tabQuestions[2]} ?`));
        if(reponse != tabReponses[2]) {
            alert(`T'as raté 3x, la reponse est ${tabReponses[2]}`);
        } else {
            alert("Reponse correcte");
            tabQuestRepo.push(`${tabQuestions[2]} ${reponse}`);
        }
    } else {
        alert("Reponse correcte");
        tabQuestRepo.push(`${tabQuestions[2]} ${reponse}`);
    };
} else {
    alert("Reponse correcte");
    tabQuestRepo.push(`${tabQuestions[2]} ${reponse}`);
};
console.log(tabQuestRepo);