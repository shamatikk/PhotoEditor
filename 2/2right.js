<script>
let canvas = {
	size: {width: 100, height: 120}
    data: {width: 100, height: 120}
	SelectedObject: {
    	Text: 'something',
        color: 'blue',
        size: {width: 100, height: 120}
        position: {x:0,y:0}
    
    }
    //Text, Images, Primitive(rectangle, circle, triangle)
}
let area = {
    Size: {width: 100, height: 120},
    Position: {x:0, y:0}
}

let history = {
	Posibility: forward, back
}


let Editor = {
    canvas: canvas,
    area:area
}


function ImportPhotos(Editor, Images){
    return(canvas)
}

function SavePhotos(Editor, Images){
    return(canvas)
}

function AddPhotos(Editor, Images){
    return(canvas)
}

function IncreasePhotos(Editor, Images){
    return(canvas)
}

function SaveSize(Editor, Images){
    return(canvas)
}

function CancelPhotos(Editor, Images){
    return(canvas)
}

function AddWords(Editor, Texts){
    return(canvas)
}

function ChooseColor(Editor, Texts){
    return(canvas)
}
function ChooseSize(Editor, Texts){
    return(canvas)
}

function AddFiltres(Editor, Filters){
    return(canvas)
}

function ChooseFiltres(Editor, Filters){
    return(canvas)
}

function AddPrimitive(Editor, Primitive){
    return(canvas)
}

function ChoosePrimitive(Editor, Primitive){
    return(canvas)
}

function ChooseSize(Editor, Size){
    return(canvas)
}

function SelectedArea(Editor, Size){
    return(area)
}

function SaveSize(Editor, Size){
    return(area)
}

function MoveArea(Editor, Moving){
    return(area)
}

function CutArea(Editor, Size){ //����� ������� ��� ����������� �������
    return(area)
}

function DeleteArea(Editor){
    return(area)
}

function ExportImage(Editor){
    return(Editor)
}

function Undo(Editor){
    return(history)
}

function Redu(Editor){
    return(history)
}
</script>
