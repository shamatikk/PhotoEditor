type Editor = {
    //selectedObject: Textobject | ImageObject | Triangle | Rectangle | Circle,
    canvas: canvas,
    filters: Array<FilterType>,
    text: Array<TextObject>,
    primitive: Array<PrimitiveObject>,
    image: Array<ImageObject>,
    selectedObject: EditorObject | null,
}

type ImageObject = EditorObject & {
    image: image
    size: number,
    Position: position,
}

type TextObject = EditorObject & {
    text: string,
    TextWidth: number,
    TextHeight: number,
    type: 'text',
    Color: color,
}

type PrimitiveObject = EditorObject & {
    type: 'Triangle' | 'Rectangle' | 'Circle',
} 

type Triangle = PrimitiveObject & {
    type: 'Triangle',
    v1: point,
    v2: point,
    v3: point,
    Color: color,
}

type Rectangle = PrimitiveObject & {
    type: 'Rectangle',
    v1: point,
    v2: point,
    v3: point,
    Color: color,
}

type Circle = PrimitiveObject & {
    type: 'Circle',
    v1: point,
    v2: point,
    v3: point,
    Color: color,
}

type Area = {
    Width: number,
    Height: number,
    Position: position
}

type Canvas = {
    w: number,
    h: number,
    data: ImageData
}

type color = {
    type = 'red' | 'blue' | 'green'
}

type filters = {
    type = 'red' | 'blue' | 'green'
}