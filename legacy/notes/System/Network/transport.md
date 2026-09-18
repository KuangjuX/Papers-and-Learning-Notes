# 传输层

- Application-level multiplexing("ports")

- Error detection, reliability,etc.

## UDP

- Unreliable and unordered datagram service

- Adds multiplexing, checksum on whole packet

- No flow control,reliability, or order guarantees

- Endpoints identified by ports

- Checksum aids in error detection

### Checksum algorithms

- Good checksum algorithms
  
  - Should detect errors that are likely to happen
    (E.g., should detect any single bit error)
  
  - Should be efficient to compute

- IP, UDP, and TCP use 1s complement sum:
  - Set checksum field to 0
  - Sum all 16-bit words in pkt
  - Add any carry bits back in(So 0x8000 + 0x8000 = 0x0001)
  - Flip bits (sum = ~sum;) to get checksum (0xf0f0 → 0x0f0f),Unless sum is 0xffff, then checksum just 0xffff  
  - To check: Sum whole packet (including sum), should get 0xffff
