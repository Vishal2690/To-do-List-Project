document.querySelector("#createList").addEventListener("click", createList);
document.querySelector("#close").addEventListener("click", hideListForm);
document.querySelector("#addList").addEventListener("click", createCard);
let cards = [];

function createList() {
    document.querySelector("#listForm").style.visibility = "visible";
    console.log("List Created");
}

function hideListForm() {
    document.querySelector("#listForm").style.visibility = "hidden";
    console.log("Hide List Form Executed");
}



function createCard() {
    document.querySelector("#listForm").style.visibility = "hidden";
    document.querySelector("#text").style.visibility = "hidden";

    let userInput = document.querySelector("#listName").value;
    console.log("Card is being created");

    let div1 = document.createElement("div");
    div1.className = "flexCards";
    let title = document.createElement("h4");
    let line = document.createElement("hr");
    let ul = document.createElement("ul");
    // let li=document.createElement("li");
    line.id = "blackLine";
    title.id = "textColor";
    title.innerText = userInput;

    let plusIcon = document.createElement("i");
    plusIcon.id = "btnOfAdd";
    plusIcon.className = "fa fa-plus-circle";

    plusIcon.addEventListener("click", () => {
        showItemForm(ul);
    });

    // Delete function working
    let deleteIcon = document.createElement("i");
    deleteIcon.id = "btnOfDel";
    deleteIcon.className = "fas fa-trash-alt";
    deleteIcon.addEventListener("click", function deleteFunction() {
        let temNewArray = [];
        for (let i = 0; i < cards.length; i++) {
            if (cards[i] !== div1) {
                temNewArray.push(cards[i]);
            }
        }
        cards = temNewArray;
        flexFunction(cards);
    });

    div1.append(line, title, ul, deleteIcon, plusIcon);

    cards.push(div1);
    // console.log(cards);
    flexFunction(cards);


    function flexFunction(cards) {
        let lists = document.querySelector("#lists");
        lists.innerHTML = "";
        for (let i = 0; i < cards.length; i++) {
            lists.appendChild(cards[i]);
        }
    }



    // Open new Windows
    title.addEventListener("click", function newDisplayIn() {
        console.log("hi");
        document.querySelector("#fixThem").style.visibility = "hidden";
        document.querySelector("#replacePageIn").style.visibility = "visible";
    
        let replaceTitleWithBack = document.createElement("h1");
        replaceTitleWithBack.id = "hideFixThem";
       replaceTitleWithBack.innerHTML = `
                                            <h2 id="go">go back</h2>
                                            <i id="arrowToLeft" class="fa fa-arrow-circle-left"></i>
                                        `;
        document.querySelector("#replacePageIn").appendChild(replaceTitleWithBack);
    
        let titileHeadingInHOneTag = document.createElement("h1");
        titileHeadingInHOneTag.innerText = userInput;
        document.querySelector("#forTheTitle").appendChild(titileHeadingInHOneTag);
    
        document.querySelector("#arrowToLeft").style.color = "blue";
    
        let lists = document.querySelector("#lists");
        lists.style.justifyContent = "center";
    
        let temNewArray = [];
        for (let i = 0; i < cards.length; i++) {
            if (cards[i] === div1) {
                temNewArray.push(cards[i]);
            }
        }
        cards = temNewArray;
        flexFunction(cards);
    });
}








    //The second page delete
    document.querySelector("#replacePageIn").addEventListener("click", function showTheFirstDisplay() {
            document.querySelector("#fixThem").style.visibility = "visible";
            document.querySelector("#replacePageIn").style.visibility = "hidden";
            document.querySelector("#fixThem1").style.color = "rgb(14, 6, 1)";
            document.querySelector("#arrowToLeft").style.color = "blue";
            document.querySelector("#forTheTitle").style.visibility = "hidden";

            let lists = document.querySelector("#lists");
            lists.style.justifyContent = "space-between";

           flexFunction(cards)
        });



    // Add functionality to form, list, Add Button and close Button and also in list Done icon add and when i click this icon it will add the line through to the list text and change the color also.
    
    function showItemForm(ul) {
        const addItemButton = document.querySelector("#addItem");
        const itemForm = document.querySelector("#itemForm");
    
        itemForm.style.visibility = "visible";
    
        addItemButton.addEventListener("click", addItem);
    
        function addItem() {
            const itemNameInput = document.querySelector("#itemName");
            const innerTexts = itemNameInput.value;
    
            const span = document.createElement("span");
            const li = document.createElement("li");
            li.innerText = innerTexts;
    
            const markDone = document.createElement("i");
            markDone.id = "btnOfDone";
            markDone.innerText = "✔";
    
            markDone.addEventListener("click", () => {
                li.style.textDecoration = "line-through";
                li.style.color = "red";
            });
    
            span.append(markDone);
            li.append(span);
            ul.append(li);
    
            itemForm.style.visibility = "hidden";
            addItemButton.removeEventListener("click", addItem);
        }
    
        const exitButton = document.querySelector("#exit");
        exitButton.addEventListener("click", exitForm);
    
        function exitForm() {
            itemForm.style.visibility = "hidden";
            addItemButton.removeEventListener("click", addItem);
        }
    }
    




