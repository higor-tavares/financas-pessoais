import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/inertia-react';
import Lancamento from '@/Components/Lancamentos';

export default function Index({ auth,lancamentos }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: '',
        value: 10,
        description: '',
        type: 'Despesa',
    });
 
    const submit = (e) => {
        e.preventDefault();
        post(route('lancamentos.store'), { onSuccess: () => reset() });
    };
 
    return (
        <AuthenticatedLayout auth={auth}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Lançamentos</h2>}>
            <Head title="Lançamentos" />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <input type="text" value={data.title} className="block w-full rounded-md" placeholder="Titulo"
                     onChange={e => setData('title', e.target.value)}
                    />
                    <input type="number" value={data.value} className="block w-full rounded-md" placeholder="R$"
                     onChange={e => setData('value', e.target.value)}
                     />
                    <div>
                    <input type="radio" id="dewey" name="type" value="despesa"/>
                    <label for="despesa">Despesa</label>
                    </div>

                    <div>
                    <input type="radio" id="louie" name="type" value="receita"/>
                    <label for="receita">Receita</label>
                    </div>
                    <textarea
                        value={data.description}
                        placeholder="Descrição"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('description', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" processing={processing}>Adicionar</PrimaryButton>
                </form>
                 
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {lancamentos.map(lancamento =>
                        <Lancamento key={lancamento.id} lancamento={lancamento} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}