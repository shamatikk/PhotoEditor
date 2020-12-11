type Editor = {
    //selectedObject: Textobject | ImageObject | Triangle | Rectangle | Circle,
    canvas: canvas,
    filters: Array<FilterType>,
    text: Array<TextObject>,
    primitive: Array<PrimitiveObject>,
    image: Array<ImageObject>,
    selectedObject: EditorObject | null,
}

type ImageObject = {
    image: ImageData
    width: number
    height: number
    position: Position,
}

type TextObject = EditorObject & {
    text: string,
    textWidth: number,
    textHeight: number,
    type: 'text',
    color: #0000,
}

type PrimitiveObject = EditorObject & {
    type: 'Triangle' | 'Rectangle' | 'Circle',
} 

type Triangle = PrimitiveObject & {
    type: 'Triangle',
    v1: point,
    v2: point,
    v3: point,
    color: #0000,
}

type Rectangle = PrimitiveObject & {
    type: 'Rectangle',
    v1: point,
    v2: point,
    v3: point,
    color: #0000,
}

type Circle = PrimitiveObject & {
    type: 'Circle',
    v1: point,
    v2: point,
    v3: point,
    color: #0000,
}

type Area = {
    width: number,
    height: number,
    position: Position
}

type Canvas = {
    width: number,
    height: number,
    data: ImageData
}

type color = {
    color: #0000
}

type filters = {
    type = 'red' | 'blue' | 'green'
}