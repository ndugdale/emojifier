type LogoProps = {
  value: string;
};

const Logo = ({ value }: LogoProps) => {
  return (
    <div
      className="font-[YesterYear] text-[6rem] sm:text-[8rem] md:text-[12rem]"
      style={{
        textShadow:
          "3px 3px 0 #fff, -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff, 3px 3px 0 #fff",
      }}
      data-testid="logo"
    >
      {value}
    </div>
  );
};

export default Logo;
