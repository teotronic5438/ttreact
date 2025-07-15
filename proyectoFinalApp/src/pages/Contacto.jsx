import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Helmet } from "react-helmet"

function Contacto() {
  return (
    <Container className="my-3">
      <h2 className="text-center">Contacto</h2>
      <p className="text-center mb-2">Estamos para ayudarte. Contactanos por cualquiera de nuestros canales o visitanos en nuestras sucursales.</p>
      <Row className="my-5">
        {/* Sucursal Escobar */}
        <Col md={6}>
          <Card className="h-100 shadow d-flex flex-column">
            <Card.Body>
              <Card.Title><FaMapMarkerAlt className="me-2" />Sucursal Escobar</Card.Title>
              <Card.Text>
                Av. de los Inmigrantes 2431<br />
                {/* B1625 Belén de Escobar, Provincia de Buenos Aires<br /> */}
                <strong>Horario:</strong> Sábados y Domingos de 8 a 17 hs<br />
                <strong>Tel:</strong>{" "}
                <a href="https://wa.me/541123439926" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="me-1 text-success" />
                  11-2343-9926
                </a><br />
                <strong>Email:</strong>{" "}
                <a href="mailto:info@teotronic.com.ar">
                  <FaEnvelope className="me-1" />
                  info@teotronic.com.ar
                </a>
              </Card.Text>

              <div className="ratio ratio-4x3 mapa-container mb-2" style={{height: 350}}>
                <iframe
                  src="https://www.google.com/maps?q=Av.+de+los+Inmigrantes+2431,+Bel%C3%A9n+de+Escobar,+Provincia+de+Buenos+Aires&output=embed"
                  allowFullScreen
                  loading="lazy"
                  title="Mapa Escobar"
                ></iframe>
              </div>

              <div className="d-flex justify-content-center gap-3">
                <a href="https://www.facebook.com/teotronic" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF size={22} className="text-primary" />
                </a>
                <a href="https://www.instagram.com/teotronic" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={22} style={{ color: "#e1306c" }} />
                </a>
                <a href="https://www.tiktok.com/@teotronic" target="_blank" rel="noopener noreferrer">
                  <FaTiktok size={22} className="text-dark" />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Sucursal Lugano */}
        <Col md={6}>
          <Card className="h-100 shadow d-flex flex-column">
            <Card.Body>
              <Card.Title><FaMapMarkerAlt className="me-2" />Sucursal Lugano</Card.Title>
              <Card.Text>
                Saladillo 5438<br />
                {/* B1439 Villa Lugano, Ciudad Autónoma de Buenos Aires<br /> */}
                <strong>Horario:</strong> Lunes a Viernes de 9 a 18 hs<br />
                <strong>Tel:</strong>{" "}
                <a href="https://wa.me/541123439926" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="me-1 text-success" />
                  11-2343-9926
                </a><br />
                <strong>Email:</strong>{" "}
                <a href="mailto:info@teotronic.com.ar">
                  <FaEnvelope className="me-1" />
                  info@teotronic.com.ar
                </a>
              </Card.Text>

              <div className="ratio ratio-4x3 mapa-container mb-2" style={{height: 350}}>
                <iframe
                  src="https://www.google.com/maps?q=Saladillo+5438,+Villa+Lugano&output=embed"
                  allowFullScreen
                  loading="lazy"
                  title="Mapa Lugano"
                ></iframe>
              </div>

              <div className="d-flex justify-content-center gap-3">
                <a href="https://www.facebook.com/teotronic" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF size={22} className="text-primary" />
                </a>
                <a href="https://www.instagram.com/teotronic" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={22} style={{ color: "#e1306c" }} />
                </a>
                <a href="https://www.tiktok.com/@teotronic" target="_blank" rel="noopener noreferrer">
                  <FaTiktok size={22} className="text-dark" />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;
