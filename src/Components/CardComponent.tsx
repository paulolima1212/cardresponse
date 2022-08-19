import { useCardContext } from "../Context/CardsContext"

interface CardProps{
    contentFace2: string
    src: string
    alt: string
    title: string
    content: string
}

interface ContextProps{
    setModalVisible: (boolean: boolean) => {};
    setModalContent: (string: string) => string;
    setModalTitle: (string: string) => string;
}

export default function CardComponent({contentFace2, src, alt, title, content}: CardProps) {

    const {setModalVisible, setModalContent, setModalTitle}:any = useCardContext()

    function handleChangeModal(){
        console.log(title);
        setModalVisible(true)
        setModalContent(content)
        setModalTitle(title)
    }

    function handleRezise() {
        const card = document.querySelectorAll('div.face.face1')
        card?.forEach((e) => {
            console.log(e);
            e.classList.toggle('active')
        })
    }

    return (
        <div className="cardContainer" onClick={() => handleRezise()}>
            <div className="card">
                <div className="face face1" data-text={alt}>
                    <div className="content">
                        <img src={src} alt={alt}  />
                    </div>
                </div>
                <div className="face face2">
                    <div className={contentFace2}>
                        <h3 onClick={() => handleRezise()}>{title}</h3>
                        <p>{content}</p>
                        <a href="#" onClick={() => handleChangeModal()}>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}