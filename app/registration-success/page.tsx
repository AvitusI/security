
type RegistrationSuccessPageProps = {
    searchParams: Promise<Record<string, string>>;
    params: Promise<Record<string, string>>;
}

export default async function RegistrationSuccessPage({
    searchParams,
    //   params
}: RegistrationSuccessPageProps) {

    const { email } = await searchParams;

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Registration Successful!</h1>
            <p className="mt-4">Thank you for registering. Check your email ({email}) for a link to activate your account.</p>
        </div>
    );
}