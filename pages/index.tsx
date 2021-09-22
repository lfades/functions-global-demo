import { A, Code, UL } from '@components';

export default function Index() {
  return (
    <div className="h-screen text-primary font-medium p-4 grid items-center justify-center">
      <div className="max-w-lg">
        <h1 className="text-6xl font-bold mb-12">Functions Global</h1>
        <p>
          This demo tests a counter using different methods to see how are they
          "preserved" when the endpoint is called multiple times.
        </p>
        <UL className="mt-6">
          <li>
            (<A href="/api/global">/api/global</A>) API Route using{' '}
            <Code>global</Code>
          </li>
          <li>
            (<A href="/api/scope">/api/scope</A>) API Route using module scope
          </li>
        </UL>
      </div>
    </div>
  );
}
