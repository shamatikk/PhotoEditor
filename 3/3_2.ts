function ChooseArea(editor: Editor, Width: number, Height: number): Editor{
    return{
        ...editor,
        Area: {
            ...editor.Area,
            w: Width,
            h: Height
        }
    }
}

function TransferArea(editor: Editor, position: {x:0,y:0}): Editor{
    return{
        ...editor,
        Area: {
            ...editor.Area,
            position: {x:0,y:0}      
        }
    }
}

function CutArea(editor: Editor, Width: number, Height: number): Editor{
    return{
        ...editor,
        Area: {
            ...editor.Area,
            w: Width,
            h: Height
        }
    }
}

function DeleteArea(editor: Editor): Editor{
    return{
        ...editor,
        Area: {
            ...editor.Area{
            DeleteArea.splice()
            }
        }
    }
}

function ChooseSizeOfCanvas(editor: Editor, Width: number, Height: number): Editor{
    return{
        ...editor,
        canvas: {
            ...editor.canvas,
            w: Width,
            h: Height
        }
    }
}

function ResizeCanvas(editor: Editor, newWidth: number, newHeight: number): Editor{
    return{
        ...editor,
        canvas: {
            ...editor.canvas,
            w: newWidth,
            h: newHeight
        }
    }
}

function AddImageToCanvas(editor: Editor, newPicture:ImageData): Editor{
    return {
        ...editor,
        canvas: {
            ...editor.canvas,
            data: newPicture
        }
    }
}

function ChangeSizeOfImage(editor: Editor, newWidth: number, newHeight: number): Editor{
    return {
        ...editor,
        canvas: {
            ...editor.canvas,
            w: newWidth,
            h: newHeight           
        }
    }
}

function ExportImage(editor: Editor,): Editor{
    return {
        ...editor,
        canvas: {
            ...editor.canvas,
        }
    }
}

function ImportImage(editor: Editor): Editor{
    return {
        ...editor,
        canvas: {
            ...editor.canvas,
        }
    }
}

function AddTextToCanvas(editor: Editor): Editor{
    return {
        ...editor,
        canvas: {
            ...editor.canvas
        }
    }
}        

function ChooseColorOfText(editor: Editor, color: 'red'|'blue'|'green'): Editor{
    return {
        ...editor,
        canvas: {
            ...editor.canvas,
            Color: color
        }
    }    
}

function DeleteText(editor: Editor): Editor{
    return{
        ...editor,
        canvas: {
            ...editor.canvas{
            DeleteText.splice()
            }
        }
    }
}

function AddPrimitiveToCanvas(editor: Editor, primitive: 'rectangle'|'circle'|'triangle', Width: number, Height:number): Editor{
    return{
        ...editor,
        canvas: {
            ...editor.canvas,
            Primitive: primitive
            w: Width,
            h: Height            
        }
    }
}

function ResizePrimitive(editor: Editor, newWidth: number, newHeight: number): Editor{
    return{
        ...editor,
        canvas: {
            ...editor.canvas,
            w: newWidth,
            h: newHeight
        }
    }
}

function ChooseColorOfPrimitive(editor: Editor, color:'red'|'blue'|'green'): Editor{
    return {
        ...editor,
        canvas: {
            ...editor.canvas,
            Color: color
        }
    }    
}

function DeletePrimitive(editor: Editor): Editor{
    return{
        ...editor,
        canvas: {
            ...editor.canvas
        }
    }
}

function AddFiltersToCanvas(editor: Editor, filters: 'red'|'blue'|'green'): Editor{
    return {
        ...editor,
        canvas: {
            ...editor.canvas,
            Filters: filters
        }
    }    
}

function DeleteFilters(editor: Editor, filters: null): Editor{
    return {
        ...editor,
        canvas: {
            ...editor.canvas,
            Filters: filters
            {
                DeleteFilters.splice()
            }
        }
    }    
}

function Undo(editor: Editor, ):Editor{
    return {
        ...editor,
        history: {
            ...editor,history
        }
    }
}

function Redu(editor: Editor, ):Editor{
    return {
        ...editor,
        history: {
            ...editor,history
        }
    }
}