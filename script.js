 $(()=>{
 
    let inNewTask = $("#inpNewTask");
    let ulTaskList = $("#ulTaskList");
    let btnAdd = $("#btnAdd");
    let btnReset = $("#btnReset");
    let btnClean = $("#btnClean");
    let btnSort = $("#btnSort");

    inNewTask.keypress((e)=>{ //for enter button
        if(e.which == 13 && (inNewTask.val().length>0))
        {
            btnAdd.click();
        }
    })

    btnAdd.click(()=>{   //Add item into the list
        let value = inNewTask.val();
        if(value.length < 1)
        {
            return;
        }
        inNewTask.val("");
        
        let listItem=$(`<li>${value}</li>`);
        listItem.click(()=>{
            listItem.toggleClass("disabled");
        })
        ulTaskList.append(listItem)
    })

    btnReset.click(()=>{  //Reset input box
        inNewTask.val("");
    })

    btnClean.click(()=>{  //Clean the done task
        $("#ulTaskList li.disabled").remove();
    })

    btnSort.click(()=>{     //sort the task 
        $("#ulTaskList li.disabled").appendTo(ulTaskList);
    })

    function toggleResetbtn(enabled){
        if(enabled) btnReset.prop("disabled",false);
        else btnReset.prop("disabled",true);
    }

    // inNewTask.on("input",()=>{
    //     console.log(inNewTask.val().length)
    //     if(inNewTask.val().length < 1)
    //     {
    //         toggleResetbtn(false);
    //     }
    //     else
    //     {
    //         toggleResetbtn(true);
    //     }
    // })

 }
 )