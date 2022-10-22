import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

import { Inertia } from '@inertiajs/inertia';

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import TextArea from '@/Components/TextArea';
import PrimaryButton from '@/Components/PrimaryButton';

export default function sendMail(props) {
    const [values, setValues] = useState({
        postName: "",
        post: "",
      })
      function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
      }

      function handleSubmit(e) {
        e.preventDefault()
        Inertia.post('/send-mail', values)
      }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">sendMail</h2>}
        >
            <Head title="sendMail" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <InputLabel forInput="postName" value="Post Name" />

                                <TextInput
                                    type="text"
                                    name="postName"
                                    id="postName"
                                    value={values.postName}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    handleChange={handleChange}
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel forInput="post" value="Post" />

                                <TextArea
                                    name="post"
                                    id="post"
                                    value={values.post}
                                    className="mt-1 block w-full"
                                    autoComplete="enter post"
                                    handleChange={handleChange}
                                />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton className="ml-4">
                                    Log in
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

