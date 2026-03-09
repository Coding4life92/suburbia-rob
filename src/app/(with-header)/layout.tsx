import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}