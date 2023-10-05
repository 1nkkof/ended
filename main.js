const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const closeBtn = document.querySelector('#close-my-modal-btn');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
		

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
		
	});
});

document.getElementById("close-my-modal-btn").addEventListener('click', function(){
	document.getElementById("modal-overlay--visible").classList.remove("modal--visible")
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
		// modalOverlay.classList.remove(closeBtn);
	}
});






// поиск 


// document.querySelector('#elastic').oninput = function(){
//     let val = this.value.trim();
//     let elasticItems = document.querySelectorAll('.elastic li');
//     if(val != ''){
//         elasticItems.forEach(function(elem){
//             if(elem.innerText.search(val) == -1){
//                 elem.classList.add('hide');
//             }
//             else{
//                 elem.classList.remove('hide');
//                 elem.innerHTML = elem.innerText;
//             }
//             let str2 = elem.innerText;
//             elem.innerHTML = insertMark(str2, elem.innerText.search(val), val.length)
//         });

        
//     }
//     else{
//         elasticItems.forEach(function(elem){
//             elem.classList.add('hide');
//             elem.innerHTML = elem.innerText;
//         })  
//     }
// }
// function insertMark(){
//     return str.slice(0, pos)+'<mark>'+str.slice(pos, pos+len)+'</mark>'+str.slice(pos+len);
// }

let keyWords = [

   
];




// gjbcr

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = keyWords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);

    }
    display(result);

    if(!result.length){
        resultBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}




// exit
function openbox(id){
    display = document.getElementById(id).style.display;

    if(display=='none'){
       document.getElementById(id).style.display='block';
    }else{
       document.getElementById(id).style.display='none';
    }
}