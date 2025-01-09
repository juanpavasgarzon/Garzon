export function FormContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-center h-full min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-xl">
                {children}
            </div>
        </div>
    );
}