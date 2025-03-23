type HeadingProps = {
  header: string;
  paragraph: string;
  headerClasses?: string;
  paragraphClasses?: string;
};

export default function Heading({
  header,
  paragraph,
  headerClasses,
  paragraphClasses,
}: HeadingProps) {
  return (
    <>
      <h2 className={`heading-2 mb-5 ${headerClasses ? headerClasses : " "}`}>
        {header}
      </h2>
      <p
        className={`paragraphs-primary ${
          paragraphClasses ? paragraphClasses : " "
        }`}
      >
        {paragraph}
      </p>
    </>
  );
}
