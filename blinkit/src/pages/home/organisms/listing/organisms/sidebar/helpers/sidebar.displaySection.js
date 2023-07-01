import Image from "../../../../../../../atoms/Image"

export function displaySection(categories, handleChange) {
    return (categories.map(category => (
        <section
            onClick={() => handleChange(category.id)}
            className="asideMenu flex">
            <Image styles="asideMenu__icon" src={category.image_url} alt="" />
            <p>{category.display_text}</p>
        </section>
    )))
}