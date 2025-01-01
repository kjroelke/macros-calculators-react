import { useMacros } from '@/hooks/useMacros';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './ui/form';
import { Button } from './ui/button';
import { Input } from './ui/input';

const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string(),
});

export default function LoginForm() {
    const { setIsLoggedIn } = useMacros();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + import.meta.env.WP_AUTH,
        };
        try {
            const response = await fetch(
                'https://macrosbysara.com/wp-json/mbs/v1/auth',
                {
                    method: 'POST',
                    headers,
                    body: JSON.stringify(values),
                },
            );
            if (response.ok) {
                setIsLoggedIn(true);
            } else {
                const data = await response.json();
                console.error(data);
            }
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className='mx-auto my-0 flex flex-col gap-y-10 gap-x-5 md:py-10 md:px-2 max-w-screen-sm'>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-8'>
                    <FormField
                        control={form.control}
                        name='username'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor='password'>
                                    Password
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        id='password'
                                        type='password'
                                        {...form.register('password')}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit'>Submit</Button>
                </form>
            </Form>
        </div>
    );
}
