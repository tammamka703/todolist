//  <========================creating tasks===================>

export let Tasks = [
    {
        id:0,
        title:"Study English",
        discription:" any thing  any thing any thing any thing any thing any thing any thing any thing  any thing  any thing any thing any thing any thing any thing any thing any thing  any thing  any thing any thing any thing any thing any thing any thing any thing  any thing  any thing any thing any thing any thing any thing any thing any thing  any thing  any thing any thing any thing any thing any thing  ",
        deadline:"22/33/4444",
        currentDate:"1/4/2024",
        IsCompleted:false,
        toggleTaskState:function(){
            return this.IsCompleted = !this.IsCompleted
        },
        changedeadline:function(newdeadline){
            return this.deadline = newdeadline
        },

    }
    ,
    {
        id:1,
        title:"Do Three Tasks per Day",
        discription:"any thing any thing  any thing  any thing any thing any thing any thing any thing  ",
        deadline:"22/33/4444",
        currentDate:"1/4/2024",
        IsCompleted:false,
        toggleTaskState:function(taskState){
            this.IsCompleted = taskState
        },
        changedeadline:function(newdeadline){
            this.deadline = newdeadline
        },
    }
    ,
    {
        id:2,
        title:"Go meet your freinds",
        discription:"any thing any thing  any thing  any thing any thing any thing any thing any thing  ",
        deadline:"22/33/4444",
        currentDate:"1/4/2024",
        IsCompleted:false,
        toggleTaskState:function(taskState){
            this.IsCompleted = taskState
        },
        changedeadline:function(newdeadline){
            this.deadline = newdeadline
        },
    }
 ]

 
 
 // <=============================/remove a Task/=========================>