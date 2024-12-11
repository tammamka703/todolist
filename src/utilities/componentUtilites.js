// make the tasks complet
import { Tasks } from "../Data/Tasks";
export function MakeTasksComplet(id){
    if(id === undefined){
        return
    }else{
        Tasks[id].IsCompleted = true
    }
}


export function ResetDeadLine(id,newDeadLine){
    if(id === undefined){
        return
    }else{
        Tasks[id].deadline = newDeadLine;
        console.log(Tasks[id])
    }
}

export function DeletTask(id){
    Tasks.Delete(Tasks[id])
    return null
}
