import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setUsername, setPhoneNumber } from "../store/slices/authSlice";
import { ContentIndicator } from "@/components/content-indicator.component";
import { CustomButton } from "@/components/custom-button.component";
import { CustomInputText } from "@/components/custom-input-text.component";
import { DecorationContainer } from "@/components/decoration-container.component";
import { SocialMediaButton } from "@/components/social-media-button.component";
import "../app/globals.css";
import "../app/assets/styles/public.css";
import { useRouter } from "next/navigation";
import { RootState, store } from "@/store";

function SignUp() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { signUpModel } = useSelector((state: RootState) => state.auth);

  const handleRegister = () => {
    if (!signUpModel.email || !signUpModel.password || !signUpModel.username) {
      alert("Por favor completa todos los campos requeridos");
      return;
    }
    router.push("/select-role");
  };

  return (
    <div className="bg-sky-400 page-size">
      <div className="flex justify-center items-center">
        <div className="hidden lg:block">
          <DecorationContainer />
        </div>
        <div className="flex flex-col justify-center items-center mt-10 gap-5 lg:ml-96">
          <h1 className="text-center text-white font-bold text-5xl">Registra tu cuenta</h1>
          <CustomInputText
            value={signUpModel.email}
            placeHolder={"Email"}
            onChange={(e) => dispatch(setEmail(e))}
            hasBorder={false}
          />
          <CustomInputText
            value={signUpModel.password}
            placeHolder={"Contraseña"}
            onChange={(e) => dispatch(setPassword(e))}
            hasBorder={false}
          />
          <CustomInputText
            value={signUpModel.username}
            placeHolder={"Nombre de usuario"}
            onChange={(e) => dispatch(setUsername(e))}
            hasBorder={false}
          />
          <CustomInputText
            value={signUpModel.phoneNumber}
            placeHolder={"Número de teléfono"}
            onChange={(e) => dispatch(setPhoneNumber(e))}
            hasBorder={false}
          />
          <CustomButton title={"Regístrate"} onSubmit={handleRegister} />
          <SocialMediaButton
            onEmitted={() => {}}
            icon="https://pngimg.com/uploads/google/google_PNG19635.png"
            background="bg-white"
            foreground="text-gray-500"
            text="Regístrate con Google"
            isBold={false}
          />
          <SocialMediaButton
            onEmitted={() => {}}
            icon="https://freelogopng.com/images/all_img/1658030243facebook-logo-white.png"
            background="bg-blue-500"
            foreground="text-white"
            text="Regístrate con Facebook"
            isBold={true}
          />
          <ContentIndicator title={"¿Ya estás registrado?"} />
          <CustomButton title={"Iniciar sesión"} onSubmit={() => router.push("/sign-in")} />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
