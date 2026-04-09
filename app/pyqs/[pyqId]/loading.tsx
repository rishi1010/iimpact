// app/pyqs/[slug]/loading.tsx

export default function Loading() {
  return (
    <main className="min-h-screen w-full bg-[#f6f4f0] text-neutral-900 px-5 py-4 font-sans animate-pulse">
      <div className="flex flex-col gap-10 w-full h-full items-center z-10">
        {/* Banner Skeleton */}
        <div className="w-full bg-linear-to-b from-[#EA804E] to-impact-orange py-12 px-7 flex flex-col items-center gap-6 h-64 justify-center">
          <div className="h-10 w-48 bg-white/30 rounded-md"></div>
          <div className="h-6 w-32 bg-white/20 rounded-md"></div>
        </div>

        <div className="w-full max-w-7xl flex gap-20 px-2 md:px-4 pb-16">
          {/* Index Skeleton (Left Column) */}
          <div className="hidden md:block w-64 flex-shrink-0 space-y-4">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-impact-orange/60 mb-2 px-2">
              Index
            </p>
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="h-6 border-l-2 border-impact-orange bg-impact-orange/10 rounded w-full"
              ></div>
            ))}
          </div>

          {/* Questions Skeleton (Right Column) */}
          <div className="flex flex-col gap-12 flex-1 min-w-0">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-4">
                {/* Question number placeholder */}
                <div className="flex items-start gap-4">
                  <div className="h-8 w-10 bg-impact-orange/30 rounded" />
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-impact-orange/15 rounded w-full" />
                    <div className="h-4 bg-impact-orange/15 rounded w-5/6" />
                    <div className="h-4 bg-impact-orange/15 rounded w-4/6" />
                    {/* Options */}
                    <div className="space-y-2 mt-4 ml-4">
                      {[...Array(4)].map((_, j) => (
                        <div
                          key={j}
                          className="h-3 bg-impact-orange/10 rounded w-3/5"
                        />
                      ))}
                    </div>
                  </div>
                  {/* Buttons placeholder */}
                  <div className="hidden md:flex flex-col gap-3 min-w-32">
                    {[...Array(3)].map((_, j) => (
                      <div
                        key={j}
                        className="h-9 bg-impact-orange/20 rounded w-full border border-impact-orange/30"
                      />
                    ))}
                  </div>
                </div>
                <div className="h-px w-full bg-impact-orange/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
