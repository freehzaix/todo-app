export default function Question({ count, a, b, reponse }) {
    return (
        <>
            <h1>Question n°{count} : {a} x {b} = {reponse}</h1>
        </>
    )
}