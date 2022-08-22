import { useCardContext } from "../Context/CardsContext"

interface CardProps{
    contentFace2: string
    src: string
    alt: string
    title: string
    content: string
    price: string
}

interface ContextProps{
    setModalVisible: (boolean: boolean) => {};
    setModalContent: (string: string) => string;
    setModalTitle: (string: string) => string;
}

export default function CardComponent({contentFace2, src, alt, title, content}: CardProps) {

    const {setModalVisible}:any = useCardContext()

    function handleChangeModal(){
        setModalVisible(true)
    }

    function handleRezise() {
        const card = document.querySelectorAll('div.face.face1')
        card?.forEach((e) => {
            e.classList.toggle('active')
        })
    }

    return (
        <div className="card">
            <div className="face face1" data-text={alt} onClick={() => handleChangeModal()}>
                <img src={src} alt={alt}  />
            </div>
            <div className="face face2">
                <div className={contentFace2}>
                    <h3 onClick={() => handleRezise()}>{title}</h3>
                    <br />
                    <p>prato1</p>
                    <a href="#" onClick={() => handleChangeModal()}>Read More</a>
                </div>
            </div>
        </div>
    )
}