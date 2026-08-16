/**
 * Recreated in code from the supplied Arden Fuel logo artwork (navy "A" monogram, green
 * gradient accent leg, ribbon-into-droplet motif). This is a close approximation for use
 * until the real logo file (SVG/PNG) is dropped into /public — swap `LogoMark`'s contents
 * for the exact asset then, but the color tokens in globals.css already match.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="275 175 435 410"
      width="55"
      height="50"
    >
      <defs>
        <linearGradient id="green1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#83B53A" />
          <stop offset="100%" stop-color="#4E8B30" />
        </linearGradient>

        <linearGradient id="green2" x1="85%" y1="0%" x2="5%" y2="100%">
          <stop offset="0%" stop-color="#0D5B32" />
          <stop offset="55%" stop-color="#19713A" />
          <stop offset="100%" stop-color="#4F8F31" />
        </linearGradient>

        <linearGradient id="drop" x1="25%" y1="0%" x2="65%" y2="100%">
          <stop offset="0%" stop-color="#D7DF32" />
          <stop offset="35%" stop-color="#A5C83A" />
          <stop offset="72%" stop-color="#18713A" />
          <stop offset="100%" stop-color="#0B5A32" />
        </linearGradient>
      </defs>

      <path
        d="M545 182
       L467 183
       L310 506
       L368 459
       L419 425
       L469 397
       L515 376
       L457 376
       L454 374 Z"
        fill="#19283F"
      />

      <path
        d="M547 182
       L508 263
       L514 280
       L553 359
       L587 349
       L623 347 Z"
        fill="url(#green1)"
      />

      <path
        d="M636 360
       L608 358
       L566 366
       L530 380
       L458 418
       L405 453
       L359 490
       L321 528
       L286 575
       L377 575
       L401 536
       L429 501
       L498 434
       L571 383
       L613 365 Z"
        fill="url(#green2)"
      />

      <path
        d="M618 376
       L575 394
       L545 413
       L508 442
       L470 479
       L544 480
       L557 450
       L575 421 Z"
        fill="#0C6A36"
      />

      <path
        d="M643 375
       L606 410
       L586 435
       L564 473
       L558 495
       L560 524
       L572 548
       L592 565
       L605 571
       L624 575
       L637 575
       L655 571
       L675 560
       L692 541
       L699 526
       L703 508
       L701 482
       L691 454 Z"
        fill="url(#drop)"
      />

      <path
        d="M671 452
       L676 473
       L676 498
       L668 521
       L661 531
       L643 546
       L625 552
       L612 552
       L632 555
       L650 551
       L662 544
       L676 528
       L683 510
       L684 492
       L681 476 Z"
        fill="white"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark className={markClassName ?? "h-9 w-9"} />
      <span className="flex flex-col leading-none justify-center items-center">
        <span className="text-lg font-extrabold tracking-tight text-navy-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1465 209"
            width="135"
            height="29"
            role="img"
            aria-label="ARDEN wordmark"
          >
            <defs>
              <linearGradient id="darkText" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1D2B40" />
                <stop offset="100%" stop-color="#17283D" />
              </linearGradient>

              <linearGradient
                id="greenText"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stop-color="#4E9B43" />
                <stop offset="55%" stop-color="#20723B" />
                <stop offset="100%" stop-color="#173D35" />
              </linearGradient>
            </defs>

            <g fill="url(#darkText)" fill-rule="evenodd" stroke="none">
              <path d="M 0.00 207.00 L 1.00 208.00 L 51.00 208.00 L 54.00 205.00 L 135.00 59.00 L 138.00 56.00 L 179.00 128.00 L 184.00 139.00 L 174.00 141.00 L 155.00 141.00 L 154.00 140.00 L 123.00 140.00 L 122.00 141.00 L 119.00 140.00 L 118.00 142.00 L 117.00 141.00 L 97.00 178.00 L 107.00 180.00 L 108.00 179.00 L 170.00 179.00 L 171.00 180.00 L 172.00 179.00 L 205.00 179.00 L 208.00 181.00 L 217.00 198.00 L 224.00 208.00 L 277.00 208.00 L 276.00 204.00 L 266.00 188.00 L 260.00 175.00 L 210.00 90.00 L 167.00 13.00 L 163.00 8.00 L 154.00 3.00 L 140.00 0.00 L 134.00 0.00 L 122.00 3.00 L 111.00 10.00 Z" />
              <path d="M 336.00 8.00 L 336.00 208.00 L 384.00 208.00 L 385.00 205.00 L 384.00 177.00 L 385.00 176.00 L 385.00 145.00 L 386.00 144.00 L 450.00 144.00 L 507.00 208.00 L 569.00 208.00 L 569.00 205.00 L 516.00 150.00 L 511.00 142.00 L 512.00 140.00 L 525.00 136.00 L 543.00 126.00 L 555.00 113.00 L 562.00 98.00 L 565.00 81.00 L 565.00 70.00 L 563.00 57.00 L 558.00 43.00 L 546.00 27.00 L 536.00 20.00 L 523.00 14.00 L 509.00 10.00 L 492.00 8.00 Z M 385.00 50.00 L 386.00 49.00 L 487.00 49.00 L 502.00 54.00 L 512.00 65.00 L 514.00 72.00 L 513.00 85.00 L 505.00 97.00 L 496.00 102.00 L 489.00 104.00 L 386.00 104.00 L 385.00 103.00 Z" />
              <path d="M 638.00 8.00 L 638.00 207.00 L 639.00 208.00 L 776.00 208.00 L 796.00 206.00 L 823.00 199.00 L 840.00 191.00 L 851.00 183.00 L 866.00 166.00 L 873.00 153.00 L 879.00 134.00 L 881.00 121.00 L 880.00 88.00 L 876.00 71.00 L 869.00 55.00 L 859.00 41.00 L 846.00 29.00 L 824.00 17.00 L 812.00 13.00 L 792.00 9.00 L 781.00 9.00 L 780.00 8.00 Z M 687.00 50.00 L 688.00 49.00 L 773.00 49.00 L 793.00 53.00 L 808.00 61.00 L 820.00 74.00 L 826.00 87.00 L 829.00 102.00 L 829.00 114.00 L 827.00 126.00 L 824.00 135.00 L 818.00 145.00 L 809.00 154.00 L 800.00 160.00 L 781.00 166.00 L 774.00 167.00 L 688.00 167.00 L 686.00 164.00 L 687.00 156.00 L 686.00 150.00 L 687.00 149.00 L 687.00 137.00 L 686.00 136.00 L 687.00 135.00 L 687.00 78.00 L 686.00 77.00 L 687.00 75.00 Z" />
              <path d="M 1228.00 8.00 L 1228.00 207.00 L 1229.00 208.00 L 1275.00 208.00 L 1275.00 78.00 L 1276.00 77.00 L 1280.00 79.00 L 1417.00 208.00 L 1464.00 208.00 L 1464.00 8.00 L 1418.00 8.00 L 1417.00 9.00 L 1417.00 138.00 L 1415.00 140.00 L 1276.00 8.00 Z" />
            </g>

            <g fill="url(#greenText)" fill-rule="evenodd" stroke="none">
              <path d="M 945.00 51.00 L 1149.00 51.00 L 1152.00 48.00 L 1161.00 29.00 L 1169.00 8.00 L 1168.00 7.00 L 945.00 8.00 Z" />
              <path d="M 945.00 128.00 L 946.00 129.00 L 1114.00 129.00 L 1134.00 88.00 L 945.00 88.00 Z" />
              <path d="M 945.00 207.00 L 946.00 208.00 L 1149.00 208.00 L 1150.00 207.00 L 1149.00 206.00 L 1151.00 205.00 L 1150.00 204.00 L 1152.00 203.00 L 1151.00 202.00 L 1153.00 201.00 L 1152.00 199.00 L 1153.00 198.00 L 1154.00 199.00 L 1153.00 197.00 L 1154.00 196.00 L 1155.00 197.00 L 1154.00 191.00 L 1160.00 184.00 L 1161.00 185.00 L 1160.00 183.00 L 1161.00 182.00 L 1162.00 183.00 L 1161.00 182.00 L 1163.00 181.00 L 1162.00 180.00 L 1164.00 179.00 L 1163.00 178.00 L 1165.00 177.00 L 1164.00 176.00 L 1166.00 175.00 L 1165.00 174.00 L 1167.00 173.00 L 1168.00 171.00 L 1167.00 170.00 L 1169.00 169.00 L 1168.00 168.00 L 1169.00 167.00 L 945.00 167.00 Z" />
            </g>
          </svg>
        </span>
        <span className="text-[10px] font-semibold tracking-[0.22em] text-brand-green-600">
          — FUEL TRADING —
        </span>
      </span>
    </span>
  );
}
