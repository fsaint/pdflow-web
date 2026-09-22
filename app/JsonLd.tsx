// One place that writes JSON-LD into a page. Next.js documents this exact shape for structured
// data; the object is ours, built in lib/schema.ts from the page's own content, never from input.

export function JsonLd({ schema }: { schema: object | object[] }) {
  const all = Array.isArray(schema) ? schema : [schema]
  return (
    <>
      {all.map((one, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(one) }}
        />
      ))}
    </>
  )
}
